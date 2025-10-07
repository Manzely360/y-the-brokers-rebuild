/*
  # Create Properties and Inquiries Tables for Y The Brokers

  ## Overview
  This migration creates the core database structure for the Y The Brokers real estate platform,
  enabling property management and customer inquiry tracking.

  ## New Tables

  ### 1. `properties`
  Stores all property listings with comprehensive details
  - `id` (uuid, primary key) - Unique identifier for each property
  - `name` (text) - Property name/title
  - `slug` (text, unique) - URL-friendly identifier
  - `category` (text) - Property category: 'residential', 'commercial', or 'coastal'
  - `location` (text) - Property location/address
  - `area` (numeric) - Property area in square meters
  - `price` (numeric) - Property price
  - `description` (text) - Detailed property description
  - `features` (jsonb) - Array of property features (bedrooms, bathrooms, amenities, etc.)
  - `status` (text) - Property status: 'available', 'sold', 'reserved'
  - `developer` (text) - Real estate developer name
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `inquiries`
  Stores customer contact form submissions
  - `id` (uuid, primary key) - Unique identifier for each inquiry
  - `name` (text) - Customer name
  - `email` (text) - Customer email address
  - `phone` (text) - Customer phone number
  - `message` (text) - Customer inquiry message
  - `status` (text) - Inquiry status: 'new', 'contacted', 'closed'
  - `created_at` (timestamptz) - Inquiry submission timestamp

  ## Security

  ### Row Level Security (RLS)
  - Both tables have RLS enabled for data protection
  - Public read access for properties (anyone can view listings)
  - Authenticated-only write access for properties (staff can manage listings)
  - Insert-only access for inquiries (anyone can submit, only staff can view)

  ### RLS Policies

  #### Properties Table:
  1. "Anyone can view properties" - Public SELECT access
  2. "Authenticated users can insert properties" - Staff can add new listings
  3. "Authenticated users can update properties" - Staff can modify listings
  4. "Authenticated users can delete properties" - Staff can remove listings

  #### Inquiries Table:
  1. "Anyone can submit inquiries" - Public INSERT access
  2. "Authenticated users can view inquiries" - Staff can view submissions
  3. "Authenticated users can update inquiry status" - Staff can manage inquiries

  ## Notes
  - Categories are constrained to valid values (residential, commercial, coastal)
  - Property slugs must be unique for URL routing
  - Default values ensure data consistency
  - Timestamps automatically track record changes
  - JSONB features field allows flexible property attribute storage
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL CHECK (category IN ('residential', 'commercial', 'coastal')),
  location text NOT NULL,
  area numeric NOT NULL,
  price numeric NOT NULL,
  description text NOT NULL DEFAULT '',
  features jsonb DEFAULT '{}',
  status text NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'sold', 'reserved')),
  developer text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view properties"
  ON properties FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert properties"
  ON properties FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update properties"
  ON properties FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete properties"
  ON properties FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiry status"
  ON inquiries FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_properties_category ON properties(category);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  source TEXT DEFAULT 'popup'
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public signup)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscribers 
FOR INSERT 
WITH CHECK (true);

-- Only admins/managers can view subscribers
CREATE POLICY "Admin and manager can view subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (is_admin_or_manager(auth.uid()));

-- Only admins/managers can update/delete
CREATE POLICY "Admin and manager can manage subscribers" 
ON public.newsletter_subscribers 
FOR ALL 
USING (is_admin_or_manager(auth.uid()));
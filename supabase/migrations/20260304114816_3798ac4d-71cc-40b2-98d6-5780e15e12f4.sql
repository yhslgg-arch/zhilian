CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  industry TEXT NOT NULL,
  scale TEXT,
  description TEXT,
  email_content TEXT,
  notify_email TEXT DEFAULT '153721773@qq.com',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert applications"
  ON public.applications FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read applications"
  ON public.applications FOR SELECT
  TO service_role
  USING (true);
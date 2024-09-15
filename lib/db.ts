import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wirqiivrioizcoopoknw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcnFpaXZyaW9pemNvb3Bva253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzOTEzMDcsImV4cCI6MjAyMzk2NzMwN30.UUvgjpQwjhm6yJ0vClDMLJknb4CGmsgHSy_Ia1VWKW0'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
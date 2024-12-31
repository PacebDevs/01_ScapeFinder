import { serve } from "https://deno.land/std@0.170.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
const supabase = createClient(supabaseUrl, supabaseKey);

serve(async (req) => {
  try {
    // Log the raw body for debugging
    const rawBody = await req.text();
    console.log("Raw body:", rawBody);

    // Attempt to parse the JSON body
    const { category } = JSON.parse(rawBody);

    if (!category) {
      return new Response(
        JSON.stringify({ error: "Missing category" }),
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("salas")
      .select("*")
      .eq("categoria", category);

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";
    console.error("Error parsing JSON:", errorMessage);

    return new Response(
      JSON.stringify({ error: "Invalid JSON format or empty body" }),
      { status: 400 }
    );
  }
});

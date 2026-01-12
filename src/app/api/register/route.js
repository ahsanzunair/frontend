export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Proxy received:", body);
    
    const response = await fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    console.log("Django response:", data);
    
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: "Check if Django server is running on port 8000"
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
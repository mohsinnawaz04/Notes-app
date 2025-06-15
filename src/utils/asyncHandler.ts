export const asyncHandler = (fn: Function) => {
  return async (req: any, ...args: any[]) => {
    try {
      return await fn(req, ...args);
    } catch (error: any) {
      // Tell more about the oopsie
      const errorMessage = error.message || "Something went wrong!";
      console.error("Error in asyncHandler:", error);
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: error.status || 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  };
};

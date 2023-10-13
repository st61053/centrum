export const getServices = async () => {

    try {
        const response = await fetch("./services.json", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

        if (!response.ok) {
            throw new Error('Fetch services.json problem!');
        }

          return response.json();  
    } catch (error) {
        
    }
}
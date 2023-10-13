export const getTerapeuts = async () => {

    try {
        const response = await fetch("./terapeuts.json", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

        if (!response.ok) {
            throw new Error('Fetch terapeuts.json problem!');
        }

          return response.json();  
    } catch (error) {
        
    }
}
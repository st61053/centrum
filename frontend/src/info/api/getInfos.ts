export const getInfos = async () => {

    try {
        const response = await fetch("./infos.json", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

        if (!response.ok) {
            throw new Error('Fetch infos.json problem!');
        }

          return response.json();  
    } catch (error) {
        
    }
}
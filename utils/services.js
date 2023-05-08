const proj = [
    "Prembly-Hack-AmNiD-App",
    "KanBan-App-API",
    "CharCord-",
    "Showcase_API",
    "movie-website",
    "space-tourist-project",
   
  ]

export async function getRepositories() {
    const perPage = 100; // number of repositories to return per page
    let page = 1; // page number to retrieve
    let repositories = [];
   
    try {
        const response = await fetch(`https://api.github.com/users/simplystina/repos?per_page=${perPage}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    const repositories = await response.json();


    const mainRepo = repositories.filter((item) => {
        console.log(item.name,"name")
        return proj.includes(item.name);
      });
    
  return mainRepo;
  
    } catch (error) {
        console.log(error)
    }
  }
  
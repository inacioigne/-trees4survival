export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://repositorio.inpa.gov.br/rest/items/30e17215-d854-4e31-98fd-f7931cb0c735/metadata')
    const data = await res.json()
  
    return data
  }
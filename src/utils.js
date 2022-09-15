const paginate = (posts) => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(30 / itemsPerPage);
  
    const newposts = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return posts.slice(start, start + itemsPerPage)
    })
  
    return newposts
  }

  export default paginate;
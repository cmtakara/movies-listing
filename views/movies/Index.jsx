const React = require("react")
const DefaultLayout = require("../Default")

class Index extends React.Component {
  render(){
    const { movies } = this.props
    return(
      <DefaultLayout>
        <div>
          <a href="/movies/new">Create a Movie</a>
          <a href="/user/logout"><button>Logout</button></a>
          {
            movies.map((movie) => {
              return(
                <article>
                  <img src={movie.poster} alt="" />
                  <a href={`/movies/${movie._id}`}><h2>{movie.title}</h2></a>
                </article>
              )
            })
          }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index
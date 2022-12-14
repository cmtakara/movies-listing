const React = require("react")
const DefaultLayout = require("./Default")

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title="Index">
                <div>
                    <a href="/user/signup"><button>Signup</button></a>
                    <a href="/user/login"><button>Login</button></a>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index
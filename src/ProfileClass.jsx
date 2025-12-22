import React from "react";


class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userDetails: null,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://api.github.com/users/Sny805");
            if (!res.ok) throw new Error("Failed to fetch user data");

            const data = await res.json();
            this.setState({ userDetails: data });
            this.timer = setInterval(() => {
                console.log("patel")
            }, 1000)
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Count updated");
        }
    }

    componentWillUnmount() {
        console.log("Profile component unmounted");
        clearInterval(this.timer)
    }

    render() {
        const { userDetails, count, error } = this.state;

        if (error) return <h2 className="error">{error}</h2>;
        if (!userDetails) return <h2 className="loading">Loading profile...</h2>;

        const { name, location, avatar_url, bio, followers, following } =
            userDetails;

        return (
            <div className="profile-card">
                <img className="avatar" src={avatar_url} alt={name} />

                <h2 className="name">{name}</h2>
                <p className="location">{location || "Location not available"}</p>
                <p className="bio">{bio || "No bio available"}</p>

                <div className="stats">
                    <span>Followers: {followers}</span>
                    <span>Following: {following}</span>
                </div>


            </div>
        );
    }
}

export default ProfileClass;

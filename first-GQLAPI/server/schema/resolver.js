const {StudentList, MovieList} = require("./dummydata.js");
const _ = require("lodash");
const resolvers = {
    Query:{
        users: () =>     {
            
            return StudentList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(StudentList, {id : Number(id)});
            return user;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name});
            return movie;
        },
        movies: () =>     {
            
            return MovieList;
        },
    },
    User: {
        favouriteMovie: () => {
            return _.filter(MovieList, (movie) => movie.director == "Christopher Nolan")
        }
    },
    Mutation:   {
        createUser: (parent, args) =>
        {
            const user = args.input;
            const lastId = StudentList[StudentList.length-1].id;
            user.id = lastId +1;
            StudentList.push(user);
            return user;
            console.log(user);
        },
        updateUserName:(parent,args) =>
        {   const userid = args.input.id;
            const  newName = args.input.newName;
            let userUpdated;
           
            StudentList.forEach((user) =>{
              
                if (user.id == userid){
                    user.name = newName;
                    userUpdated = user;
                   
                }
            }
            )
            return userUpdated;
        },
        deleteUser:(parent,args) =>
        {   
            const id = args.id;
           
           _.remove(StudentList,(user) => user.id === Number(id));
           return null;
        }
    }
        

};

module.exports = {resolvers};
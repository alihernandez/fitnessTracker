//create 
const {Workout} = require("../models")

const db = require("../models")

module.exports= function(app) {


app.get("/api/workouts", function (req, res){
    db.Workout.find().then(function (dbWorkout){
        // console.log(dbWorkout),
res.json(dbWorkout)
    })
});

//create new workout
app.post('/api/workouts', (req,res) => {
    db.Workout.create({}).then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(({ error }) => {
        console.log(error);
    })
});


app.put("/api/workouts/:id", ({body, params}, res) => {
    // console.log(body, params)
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body}},
            )
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            })
        })
app.get("/api/workouts/range", function (req, res){
    db.Workout.find().then(function (dbWorkout){
res.json(dbWorkout)
    })
})
}

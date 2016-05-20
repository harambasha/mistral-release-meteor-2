Projects = new Mongo.Collection('projects');
Projects.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
});

Release = new SimpleSchema({
    name: {
        type: String
    },
    releaseDate:{
        type: Date
    },
    notes :{
        type: String,
        autoform: {
            rows: 4
        }
    }
});

ProjectSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Project Name"
    },
    description: {
        type: String,
        label: "Project Description"
    },
    releases:{
        type: [Release]
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Projects.attachSchema(ProjectSchema);
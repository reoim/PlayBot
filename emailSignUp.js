'use strict';
const Mongo = require('mongodb').MongoClient;
const uri = "mongodb://reo:mFive_five55@ds019846.mlab.com:19846/playbot";

module.exports = function(ctx, cb) {
    let mailID = ctx.data.replyData;
    if(mailID) {
        Mongo.connect(uri, function(error, db) {
            db.collection('players')
                .update({
                    email: mailID
                }, {
                    email: mailID
                }, {
                    upsert: true
                }, (error, result) => {
                    if(!error) {
                        db.close();
                        cb(null, {});
                    }
                });

        });
    } else {
        cb(null, {});
    }
}
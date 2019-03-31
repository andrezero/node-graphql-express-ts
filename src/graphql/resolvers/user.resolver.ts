import User from '../../models/user';

export default {
  Query: {
    user: async (parent: any, args: any/*, context, info*/) => {
      const _id = args._id;
      return await User.findOne({ _id }).exec();
    },
    users: async (parent: any, args: []/*, context, info*/) => {
      const users = await User.find({}).exec();
      return users.map((user: any) => ({
        _id: user._id.toString(),
        name: user.name,
        email: user.email
      }));
    }
  },
  Mutation: {
    createUser: async (parent: any, args: any/*, context, info*/) => {
      const user = args.user;
      const newUser = await new User({
        name: user.name,
        email: user.email
      });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateUser: async (parent: any, args: any/*, context, info*/) => {
      const user = args.user;
      const _id = args._id;
      return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(_id, { $set: { ...user } }, { new: true }).exec(
          (err, res: any) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: async (parent: any, args: any/*, context, info*/) => {
      const _id = args._id;
      return new Promise((resolve, reject) => {
        User.findByIdAndDelete(_id).exec((err, res: any) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};

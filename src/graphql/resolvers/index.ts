import { mergeResolvers } from 'merge-graphql-schemas';

import User from './user.resolver';
// import Post from './Post/';
// import Comment from './Comment/';

const resolvers = [User];

export default mergeResolvers(resolvers);

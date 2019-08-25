import { FieldResolver, Root, Mutation, Query, Arg, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import User from "../schemas/User";
import Event from "../schemas/Event";
import Enrollment from "../schemas/Enrollment";
import { UserInput } from "./types/UserInput";

@Resolver(User)
export class UserResolver {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
    @InjectRepository(Enrollment) private readonly enrollmentRepository: Repository<Enrollment>,
  ) { }

  @Query(returns => User, { nullable: true })
  login(@Arg("userName") userName: string, @Arg("password") password: string) {
    return this.userRepository.findOneOrFail({
      where: {
        userName: userName,
        password: password,
      }
    })
  }

  @Query(returns => User, { nullable: true })
  user(@Arg("id") userId: string) {
    return this.userRepository.findOne(userId);
  }

  @Query(returns => [User])
  users() {
    return this.userRepository.find();
  }

  @Mutation(returns => User)
  async addUser(
    @Arg("user") userInput: UserInput,
  ): Promise<User> {
    const user = this.userRepository.create(userInput);
    return await this.userRepository.save(user);
  }

  @FieldResolver()
  events(@Root() user: User) {
    return this.eventRepository.find({
      cache: 1000,
      where: { organizerId: user.id },
    });
  }

  @FieldResolver()
  async enrollments(@Root() user: User): Promise<Enrollment[]> {
    return await this.enrollmentRepository.find({
      user,
    });
  }
}
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgreUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController}
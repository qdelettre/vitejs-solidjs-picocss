import { Component, createSignal } from 'solid-js';
import { IUser } from '../../models/user';
import User from '../user/User';

export interface UsersTableProps {
    users: IUser[];
}

const UsersTable: Component<UsersTableProps> = ({ users }) => {
    const [currentUser, setCurrentUser] = createSignal<IUser | null>(null);
    const [modal, setModal] = createSignal<boolean>(false);

    const toggleModal = (user?: IUser): void => {
        setCurrentUser(user ?? null);
        setModal(Boolean(user));
    };

    return (
        <>
            <table role="grid">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td data-scope="row">
                                <a
                                    href={`#${user.id}`}
                                    data-tooltip={`Show user ${user.id}`}
                                    data-target="modal-user"
                                    onClick={() => toggleModal(user)}
                                >
                                    {user.id}
                                </a>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <dialog id="modal-user" open={modal()}>
                {currentUser() && (
                    <article>
                        <a
                            href="#"
                            aria-label="Close"
                            class="close"
                            data-target="modal-example"
                            onClick={() => toggleModal()}
                        ></a>
                        <User user={currentUser()}></User>
                    </article>
                )}
            </dialog>
        </>
    );
};

export default UsersTable;

import { Component } from 'solid-js';
import { IUser } from '../../models/user';

export interface UserProps {
    user: IUser;
}

const User: Component<UserProps> = ({ user }) => (
    <article>
        <header>User Id: {user.id}</header>
        <div class="grid headings">
            <label for="username">
                Username
                <input
                    disabled
                    value={user.username}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                />
            </label>

            <label for="name">
                Name
                <input disabled value={user.name} type="text" id="name" name="name" placeholder="Name" required />
            </label>
        </div>

        <label for="email">Email address</label>
        <input disabled value={user.email} type="email" id="email" name="email" placeholder="Email address" required />

        <label for="phone">Phone</label>
        <input disabled value={user.phone} type="phone" id="phone" name="phone" placeholder="Phone number" required />
    </article>
);

export default User;

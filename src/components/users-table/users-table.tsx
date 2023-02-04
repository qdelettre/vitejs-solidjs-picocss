import { Component } from "solid-js";
import { IUser } from "../../models/user";

export interface UsersTableProps {
    users: IUser[];
}

const UsersTable: Component<UsersTableProps> = ({users}) => {

return (
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
                href={`/user-list/${user.id}`}
                data-tooltip={`Show user ${user.id}`}
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
  );
        }

        export default UsersTable;
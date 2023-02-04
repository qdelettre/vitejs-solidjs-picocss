import { Component, createResource } from 'solid-js';
import './App.scss';
import Footer from './components/footer/Footer';
import UsersTable from './components/users-table/users-table';
import { IUser } from './models/user';

const fetchUsers = async (): Promise<IUser[]> => (await fetch('https://jsonplaceholder.typicode.com/users')).json();

const App: Component = () => {
    const [users] = createResource(fetchUsers);

    return (
        <>
            <main class="container">
                {users.loading && <div aria-busy="true">Loading...</div>}
                {!users.error && !users.loading && <UsersTable users={users()} />}
            </main>
            <Footer />
        </>
    );
};

export default App;

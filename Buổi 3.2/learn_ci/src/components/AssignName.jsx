export default function AssignName({ assignedTo, users }) {
    const user = users.find(u => u.userId === assignedTo);
    return <div className="assign">{user?.name}</div>;
}

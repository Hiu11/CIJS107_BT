import AssignName from "./AssignName";
import ClockIcon from "./ClockIcon";
import FlagIcon from "./FlagIcon";
import EditIcon from "./EditIcon";
import AttachmentIcon from "./AttachmentIcon";

export default function TaskCard({ task, users, flags }) {
  return (
    <div className="task-card">

      <div className="task-top">
        <h4>{task.title}</h4>
        <EditIcon />
      </div>

      <p className="desc">{task.description}</p>

      <AssignName assignedTo={task.assignedTo} users={users} />

      <div className="task-bottom">
        <AttachmentIcon total={task.totalAttachments} />
        
        <FlagIcon flagId={task.flagId} flags={flags} />
        <ClockIcon deadline={task.deadline} />
        
      </div>

    </div>
  );
}

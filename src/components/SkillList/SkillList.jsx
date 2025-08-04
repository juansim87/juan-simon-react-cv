import "./SkillList.css";

export const SkillList = ({ softSkills }) => {
	return (
		<div className="skill-list">
			<ul>
				{softSkills.map((item) => (
					<li key={item.id}>✅ {item.skill}</li>
				))}
			</ul>
		</div>
	);
};

import { Link } from 'react-router-dom';

const Navabr = () => {
	return (
		<>
			<nav
				className="navbar navbar-light navbar-expand-sm"
				style={{ background: '#ffe5d9' }}
			>
				<div className="container" style={{ background: 'inherit' }}>
					<Link
						to={'/employees'}
						className="navbar-brand border border-dashed-dark"
						style={{ background: 'inherit' }}
					>
						<span
							className="mx-2"
							style={{
								fontFamily: 'Questrial',
								fontWeight: '700',
								background: 'inherit',
							}}
						>
							Employee Book{' '}
							<i className="fa fa-book text-dark" aria-hidden={true}></i>
						</span>
					</Link>
					<Link to={'/employees/add'} className="btn btn-outline-dark">
						Add New Employee{' '}
						<i
							className="fa fa-plus text-info"
							style={{ background: 'inherit' }}
							aria-hidden={true}
						></i>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navabr;

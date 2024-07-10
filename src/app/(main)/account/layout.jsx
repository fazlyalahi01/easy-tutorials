import Menu from "./component/account-menu";
import ProfileInfo from "./component/profile-info";

function Layout({ tabs }) {
	return (
		<section className="relative pb-16">
			<div className="container relative mt-10">
				<div className="lg:flex">
					<div className="lg:w-1/4 md:px-3">
						<div className="relative">
							<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
								<ProfileInfo />
								<div className="border-t border-gray-100 dark:border-gray-700">
									<Menu />
								</div>
							</div>
						</div>
					</div>
					<div className="lg:w-3/4 md:px-3 mt-[30px] lg:mt-0">
						{tabs}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Layout;

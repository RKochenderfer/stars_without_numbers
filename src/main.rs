#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
extern crate bson;
extern crate mongodb;

use rocket_contrib::serve::StaticFiles;

#[get("/")]
fn index() -> &'static str {
	"Hello, world!"
}

fn main() {
	rocket::ignite()
		.mount("/", StaticFiles::from("frontend"))
		.launch();
}

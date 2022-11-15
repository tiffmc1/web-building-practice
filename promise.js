//es6 suger code, for easier to use
const promise = async () => {
	const response = await fakeApiCall();
};

//babel will compile es6 down to original level
//es6 took away then keyword to avoid callback hell
fakeApiCall.then((data) => {
	fakeApiCall2.then();
});

const fakeApiCall = new Promise((resolve, reject) => {
	resolve("response data");
});

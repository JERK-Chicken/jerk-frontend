export default function isLoggedIn() {
    return (sessionStorage.getItem("json-token") === null) ? false : true;
}
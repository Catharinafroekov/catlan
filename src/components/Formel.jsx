const Formel = () => {
  return (
    <div className="bg-white bg-opacity-75 h-400 w-400 rounded-12 pb-7 pt-7 ">
      <h2 className="text-darkblue ml-5">FOO-TICKET</h2>
      <p className="text-darkblue ml-5 pb-5">Guest 1</p>
      <form className="flex flex-col ml-5">
        <label>Firstname</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="text"
          name="firstname"
          placeholder="Alberte"
        />
        <label>Lastname</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="text"
          name="lastname"
          placeholder="Viendahl"
        />
        <label>Phone number</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="numbers"
          name="phone number"
          placeholder="+45 12345678"
        />
        <label>Email</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="mail"
          name="mail"
          placeholder="alan0002@stud.kea"
        />
      </form>
    </div>
  );
};

export default Formel;

import { idBadge } from "fontawesome";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			//Func para importar contacto
			getContacto: async () => {
				const res = await fetch(process.env.BACKEND_URL + "agendas/facundo/contacts");
				const data = await res.json()
				if (res.status == 404){
					const actions = getActions()
					await actions.createAgenda()
					return 
				}
				console.log(data);
				setStore({ contacts: data.contacts })
			},

			createContacto: async (newContact) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				try {
					const res = await fetch(process.env.BACKEND_URL + "agendas/facundo/contacts", {
						method: "POST",
						headers: myHeaders,
						body: JSON.stringify(newContact)
					});
					if (res.ok) {
						await getActions().getContacto();
					} else {
						console.error("Error en la creación del contacto:");
					};
				}
				catch (error) {
					console.error("Error inesperado:", error);
					// Mostrar un mensaje de error genérico al usuario
					alert("Error inesperado. Por favor, inténtalo de nuevo más tarde.");


				};

			},

			createAgenda: async () => {
				try{
					const res = await fetch("https://playground.4geeks.com/contact/agendas/facundo",{
						method: "POST",
						headers: { "Content-Type": "aplication/json"}
					})
					if (res.status == 201){
						await getActions().getContacto()
					}
				} catch (error){
					console.log(error)
					return false
				}
			},

			deleteContacto: async (id) => {
				const res = await fetch(`${process.env.BACKEND_URL}agendas/facundo/contacts/${id}`, {
					method: "DELETE"
				});
				console.log(res)
				if (res.ok) {
					await getActions().getContacto();
				} else {
					console.log("Error al eliminar Contacto")
				}
			},

			editContacto: async (id, updateContact) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const res = await fetch(`${process.env.BACKEND_URL}agendas/facundo/contacts/${id}`, {
					method: "PUT",
					headers: myHeaders,
					body: JSON.stringify(updateContact),
				});
				if (res.ok) {
					await getActions().getContacto();
				} else {
					console.error("Error al editar el contacto");
				}
			},
			clearContacto: () => {
				setStore({contact:{name: "", email: "", phone: "", address: ""}});
			}

		},
	};
};

export default getState;

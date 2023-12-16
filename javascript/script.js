
const {createApp} = Vue ;
createApp({
   data(){
    return{
        contacts: [
            {
                name: 'Michele',
                avatar: 'avatar-boolzap/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:30:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 16:15:22', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'avatar-boolzap/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 16:30:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 16:30:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 16:35:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'avatar-boolzap/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',       
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 10:10:40', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 10:20:10', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 16:15:22', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'avatar-boolzap/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'avatar-boolzap/user.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'avatar-boolzap/user.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:51:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'avatar-boolzap/user.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'avatar-boolzap/user.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        oraMessaggio: luxon.DateTime.fromFormat('10/01/2020 15:51:00', 'dd/MM/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_SIMPLE),

                    }
                ],
            }
        ],
        selectedContact: null,
        messagiVisualizati: [],
        searchChat: '',
        nuovoMessaggio: '',
        // intervalId: null, 


        
       
        
    }

   },
   computed: {
    richercaChat() {
        // Se c'è una query di ricerca, filtra e ordina i contatti, altrimenti mostra tutti i contatti
        if (this.searchChat.trim() !== '') {
            return this.contacts
                .filter(contact => contact.name.toLowerCase().includes(this.searchChat.toLowerCase()))
                .sort((a, b) => a.name.localeCompare(b.name));
        } else {
            // Quando non c'è una query di ricerca, mostra i contatti nell'ordine originale
            return this.contacts.slice();
        }
    },
},

    mounted() {
        
        // Seleziona il primo contatto quando l'app è montata
        this.selectContact(this.contacts[0]);

        // this.oraCorrente();

        // this.intervalId = setInterval(this.updateCurrentTime, 60000);




    },
   methods:{
    selectContact(contact) {

        // rimuovo l'item dalla lista 
        const index= this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);

        // inserimento dell'item in cima 
        this.contacts.unshift(contact);

        // elemento selezionato 
        this.selectedContact = contact;

        // aggiurnamento dei messaggi al click 
        this.messagiVisualizati();
    },
    messagiVisualizati(){
        // recupero dei messaggi in base alla chat 
        if(this.selectedContact){
            this.messagiVisualizati = this.selectedContact.messages;
        }else{
            this.messagiVisualizati= [];
        }
    },
    inviaMessaggio(){
        if (this.selectedContact) {
            const testoMessaggio = this.nuovoMessaggio.trim();

            if (testoMessaggio !== '') {
                const nuovoMessaggio = {
                    date: new Date().toLocaleString(),
                    message: testoMessaggio,
                    status: 'sent',
                    oraMessaggio: luxon.DateTime.local().toLocaleString(luxon.DateTime.TIME_SIMPLE),

                };


                // aggiungo il nuovo messaggio 
                this.selectedContact.messages.push(nuovoMessaggio);
                
                // dopo l'invio del messaggio svuotiamo l'input 
                this.nuovoMessaggio= ' ',

                this.messagiVisualizati = this.selectedContact.messages.slice();
            }

        
        }


    },
    ultimoMessaggio(contact) {
        if (contact.messages && contact.messages.length > 0) {
            const lastMessage = contact.messages[contact.messages.length - 1];

            if (lastMessage.status === 'sent') {
            return `Tu: ${lastMessage.message}`;
            } else {
            return `${contact.name}: ${lastMessage.message}`;
            }
        }
        return 'Nessun messaggio';
    },
    // getCurrentTime() {
    //     return luxon.DateTime.local().toLocaleString(luxon.DateTime.TIME_SIMPLE);

    // },
    // oraCorrente() {
    //     const now = luxon.DateTime.local();
    //     const updatedTime = now.set({ second: 0, millisecond: 0 });
    //     this.currentTime = updatedTime.toLocaleString(luxon.DateTime.TIME_SIMPLE);
    // },
    // beforeUnmount() {
    //     clearInterval(this.intervalId);
    // },



},
}).mount('#app')
   
  

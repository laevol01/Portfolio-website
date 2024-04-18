    <template>
        <div class="mt-16">
        <form @submit.prevent="submitForm" class="max-w-md mx-auto">
            <div class="relative z-0 w-full mb-5 group">
            <input v-model="formData.email" type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-secondary_light appearance-none dark:text-primary dark:border-gray textdark:focus:border-accent focus:outline-none focus:ring-0 textdark:focus:border-accent peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-grey dark:text-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
            <input v-model="formData.phoneNumber" type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-secondary_light appearance-none dark:text-primary dark:border-gray textdark:focus:border-accent focus:outline-none focus:ring-0 textdark:focus:border-accent peer" placeholder=" " required />
            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-grey dark:text-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefonnummer (+45 12 34 56 78)</label>
            </div>
    
            <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
                <input v-model="formData.firstName" type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-secondary_light appearance-none dark:text-primary dark:border-gray textdark:focus:border-accent focus:outline-none focus:ring-0 textdark:focus:border-accent peer" placeholder=" " required />
                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-grey dark:text-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fornavn</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input v-model="formData.lastName" type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-secondary_light appearance-none dark:text-primary dark:border-gray textdark:focus:border-accent focus:outline-none focus:ring-0 textdark:focus:border-accent peer" placeholder=" " required />
                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-grey dark:text-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Efternavn</label>
            </div>
            </div>
            <div class="w-full md:gap-6">
    
            <div class="relative z-0 w-full mb-5 group">
                <label for="message" class="block mb-2 text-sm font-medium text-gray dark:text-primary">Hvad har du brug for?</label>
                <textarea v-model="formData.message" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray bg-primary_light rounded-lg border border-secondary_light dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-primary" placeholder="Skriv her..." required></textarea>
            </div>
            </div>
            <button type="submit" class="text-primary bg-secondry hover:bg-secondary_light font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center bg-secondary dark:hover:bg-secondary_light">Kontakt mig</button>
        </form>
        </div>
    </template>
    
    <script setup>
    const formData = reactive({
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        message: ''
    });
    
    const submitForm = () => {
        console.log(formData);
    };
    </script>

    <script>
    import { reactive } from 'vue';
    </script>
    
    <style lang="scss" scoped>
    
    </style>
    
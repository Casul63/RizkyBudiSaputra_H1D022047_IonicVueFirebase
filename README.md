# Pertemuan 10 Tugas 9 Praktikum Pemrograman Mobile
Nama    : Rizky Budi Saputra
NIM     : H1D022047
Shift Lama D, Shift Baru F

## Config Firebase
Copy config dari Firebase ke file firebase.ts
```ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJ16XY6VRwk__paMzwNZPBYh1ADa2kdkI",
    authDomain: "vue-firebase-5d5c4.firebaseapp.com",
    projectId: "vue-firebase-5d5c4",
    storageBucket: "vue-firebase-5d5c4.firebasestorage.app",
    messagingSenderId: "784946743380",
    appId: "1:784946743380:web:35b2ba13d05b49d73f45c1"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
```

## Autentikasi
Klik tombol "Sign In With Google". Pilih akun yang akan digunakan dan lanjutkan. Akan digunakan fungsi login() yang akan menggunakan loginWithGoogle dari auth.ts.
```ts
const login = async () => {
    await authStore.loginWithGoogle();
};

const loginWithGoogle = async () => {
        try {
            await GoogleAuth.initialize({
                clientId: '784946743380-193r00me346h542n5uuvqnplk8lp8rkr.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
                grantOfflineAccess: true,
            });

            const googleUser = await GoogleAuth.signIn();

            const idToken = googleUser.authentication.idToken;

            const credential = GoogleAuthProvider.credential(idToken);

            const result = await signInWithCredential(auth, credential);

            user.value = result.user;

            router.push("/home");
        } catch (error) {
            console.error("Google sign-in error:", error);

            const alert = await alertController.create({
                header: 'Login Gagal!',
                message: 'Terjadi kesalahan saat login dengan Google. Coba lagi.',
                buttons: ['OK'],
            });

            await alert.present();

            throw error;
        }
    };

```

![autentikasi](autentikasi.png)

## Home
Setelah login akan redirect ke home. TIdak ada apa-apa di sini

![home](home.png)

## Profile + Logout
Klik tombol profile di bottom navbar untuk ke profile. Data user akan didapatkan dari user yang menyimpan value authStore.user 
```ts
const authStore = useAuthStore();
const user = computed(() => authStore.user);
```
Foto profile user dari ion-avatar dengan source user
```html
<ion-avatar>
    <img alt="Avatar" :src="userPhoto" @error="handleImageError" />
</ion-avatar>
```
```ts
const userPhoto = ref(user.value?.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg');
```

![profile](profile.png)

Untuk logout dengan
```ts
const logout = () => {
    authStore.logout();
};
```

# Pertemuan 11 Tugas 10 Praktikum Pemrograman Mobile

![toDO](toDo.png)

Home baru dengan To Do. Penggunaan dengan ion-list dengan ion-item-sliding yang menggunakan for loop untuk mendapatkan semua data To Do.

![addToDO](addToDo.png)

Menambah To Do. Kode yang bersangkutan adalah.

```ts
const handleStatus = async (statusTodo: Todo) => {
  const slidingItem = itemRefs.value.get(statusTodo.id!);
  await slidingItem?.close();
  try {
    await firestoreService.updateStatus(statusTodo.id!, !statusTodo.status);
    await showToast(
      `Todo marked as ${!statusTodo.status ? 'completed' : 'active'}`,
      'success',
      checkmarkCircle
    );
    loadTodos();
  } catch (error) {
    await showToast('Failed to update status', 'danger', closeCircle);
    console.error(error);
  }
};
```

![toDo](toDo2.png)

Tampilan setelah add To Do.

![edit](editToDo.png)

Tampilan edit to do dengan modal. Kode untuk update firebase adalah
```ts
const handleEdit = async (editTodo: Todo) => {
  const slidingItem = itemRefs.value.get(editTodo.id!);
  await slidingItem?.close();

  editingId.value = editTodo.id!;
  todo.value = {
    title: editTodo.title,
    description: editTodo.description,
  }
  isOpen.value = true;
}
```

![toDo3](toDo3.png)

Tampilan to do edited

![Delete](toDoHapus.png)

Untuk menghapus to do. Kode terkait adalah

```ts
const handleDelete = async (deleteTodo: Todo) => {
  try {
    await firestoreService.deleteTodo(deleteTodo.id!);
    await showToast('Todo deleted successfully', 'success', checkmarkCircle);
    loadTodos();
  } catch (error) {
    await showToast('Failed to delete todo', 'danger', closeCircle);
    console.error(error);
  }
};
```


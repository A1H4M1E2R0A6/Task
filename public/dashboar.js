// BLOG  //
const currentname = document.getElementById('firstName').value;
console.
import firebase from firestore
window.CreateBlog= function(){
    const blogTitle = document.getElementById('blogTitle').value;
      const blogBody = document.getElementById('blogBody').value;
console.log("blogTitle", blogTitle)
  }
      
;
    firebase.initializeApp(firebaseConfig);
    

    const userName = user.displayName;
    document.getElementById('userName').textContent = userName;

    const postForm = document.getElementById('postForm');
    const blogList = document.getElementById('blogList');
    
    postForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const blogTitle = document.getElementById('blogTitle').value;
      const blogBody = document.getElementById('blogBody').value;
      
      try {
        await db.collection('blogs').add({
          userId: user.uid,
          title: blogTitle,
          body: blogBody,
          publishDate: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Clear form fields
        postForm.reset();
      } catch (error) {
        console.error(error);
      }
    });

    // Display previously posted blogs
    const blogsRef = db.collection('blogs').where('userId', '==', user.uid).orderBy('publishDate', 'desc');
    blogsRef.onSnapshot((snapshot) => {
      blogList.innerHTML = '';
      snapshot.forEach((doc) => {
        const blogData = doc.data();
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h3>${blogData.title}</h3>
          <p>${blogData.publishDate.toDate().toDateString()}</p>
          <p>${blogData.body}</p>
          <button class="updateButton" data-blog-id="${doc.id}">Update</button>
          <button class="deleteButton" data-blog-id="${doc.id}">Delete</button>
        `;
        blogList.appendChild(listItem);
      });
      
      // Add event listeners to update and delete buttons
      const updateButtons = document.querySelectorAll('.updateButton');
      const deleteButtons = document.querySelectorAll('.deleteButton');

      updateButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const blogId = button.getAttribute('data-blog-id');
          // Implement update functionality
        });
      });

      deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const blogId = button.getAttribute('data-blog-id');
          // Implement delete functionality
        });
      });
    });

    // Logout button
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
      firebase.auth().signOut();
      // Redirect to the login page
      window.location.href = 'login.html';
    });
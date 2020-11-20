import React from "react"

export default function Home() {

  // function initializeUi() {
  //   notificationButton.addEventListener("click", () => {
  //     displayNotification();
  //   });
  // }
  
  function displayNotification() {
    if (window.Notification && Notification.permission === "granted") {
      notification();
    }
    // If the user hasn't told if he wants to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(status => {
        if (status === "granted") {
          notification();
        } else {
          alert("You denied or dismissed permissions to notifications.");
        }
      });
    } else {
      // If the user refuses to get notified
      alert(
        "You denied permissions to notifications. Please go to your browser or phone setting to allow notifications."
      );
    }
  }
  
  function notification() {
    const options = {
      body: "Testing Our Notification",
      icon: "./bell.png"
    };
    //swRegistration.showNotification("PWA Notification!", options);
    console.log('notification')
    window.serviceWorkerRegistration.showNotification("PWA Notification!", options);
    
  }

  return (
    <>
      <div>Hello world!</div>
      <div class="container">
        <button id="enableNotifications" onClick={() => displayNotification()}>🔔 Enable Notification</button>
      </div>
    </>
  )
}

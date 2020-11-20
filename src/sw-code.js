// show a notification after 15 seconds (the notification
// permission must be granted first)
// setTimeout(() => {
//     self.registration.showNotification("Hello, world!")
// }, 15000);
// register a custom navigation route
// const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
//     // ...
//   })
//   workbox.routing.registerRoute(customRoute)

function notification(text) {
    self.registration.showNotification(text)
}

function displayNotification() {
    //Ask user if we show notifications
    if (window.Notification && Notification.permission === 'granted') {
      notification("Hello, world!");
      // We will create this function in a further step.
    }
    // If the user hasn't told whether he wants to be notified or not
    // Note: because of Chrome, we cannot be sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (window.Notification && Notification.permission !== 'denied') {
      Notification.requestPermission(status => {
        if (status === 'granted') {
            notification("Hello, world!");
        } else {
          alert('You denied or dismissed permissions to notifications.');
        }
      });
    } else {
      // If the user refuses to get notified
      alert(
        'You denied permissions to notifications. Please go to your browser or phone setting to allow notifications.'
      );
    }
  }
  displayNotification();
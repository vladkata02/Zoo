import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { PostProvider } from "./contexts/PostContext";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { Tickets } from "./components/Tickets/Tickets";
import { Posts } from "./components/Posts/Posts";
import { CreatePost } from "./components/CreatePost/CreatePost";
import { PostDetails } from "./components/PostDetails/PostDetails";
import { EditPost } from "./components/EditPost/EditPost";
import { RouteGuard } from "./components/common/RouteGuard";
import { PostOwner } from "./components/common/PostOwner";
import { TicketProvider } from "./contexts/TicketContext";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <PostProvider>
          <TicketProvider>
            <div id="box">
              <Header />

              <main id="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/posts/:postId" element={<PostDetails />} />
                  <Route element={<RouteGuard />}>
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/tickets" element={<Tickets />} />
                    <Route
                      path="/posts/:postId/edit"
                      element={
                        <PostOwner>
                          <EditPost />
                        </PostOwner>
                      }
                    />
                  </Route>
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </TicketProvider>
        </PostProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

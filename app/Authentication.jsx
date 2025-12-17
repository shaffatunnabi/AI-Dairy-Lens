import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Authentication() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [screen, setScreen] = useState("login");

  // login fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signup fields
  const [username, setUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmSignupPassword, setConfirmSignupPassword] = useState("");

  // forgot/reset fields
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // navigation change
  const goTo = (name) => {
    resetForm();
    setScreen(name);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setSignupEmail("");
    setSignupPassword("");
    setConfirmSignupPassword("");
    setForgotEmail("");
    setResetCode("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  const handleLogin = () => {
    if (!email || !password) return alert("Enter email/password");
    router.replace("/homepage");
  };

  const handleSignup = () => {
    if (!username || !signupEmail || !signupPassword || !confirmSignupPassword)
      return alert("Fill all fields");

    if (signupPassword !== confirmSignupPassword) return alert("Passwords not matching");

    router.replace("/homepage");
  };

  const handleForgot = () => {
    if (!forgotEmail) return alert("Enter email");
    goTo("reset");
  };

  const handleReset = () => {
    if (!resetCode || !newPassword || !confirmNewPassword)
      return alert("Fill all fields");

    if (newPassword !== confirmNewPassword) return alert("Passwords not matching");

    goTo("login");
  };

  return (
    <View style={{
      flex: 1,
      paddingTop: insets.top,
      backgroundColor: "#006D5B"
    }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>

          {/* logo */}
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <Image source={require("../assets/img/dairy.png")} style={{ width: 120, height: 120 }} />
          </View>

          {/* login screen */}
          {screen === "login" && (
            <View>
              <Text>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <Text>Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                secureTextEntry
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#40B5AD", padding: 15, borderRadius: 10, marginTop: 20 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => goTo("forgot")} style={{ marginTop: 15 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => goTo("signup")} style={{ marginTop: 15 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Create Account</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* signup screen */}
          {screen === "signup" && (
            <View>
              <Text>Username</Text>
              <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <Text>Email</Text>
              <TextInput
                value={signupEmail}
                onChangeText={setSignupEmail}
                placeholder="Email"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <Text>Password</Text>
              <TextInput
                value={signupPassword}
                onChangeText={setSignupPassword}
                secureTextEntry
                placeholder="Password"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <Text>Confirm Password</Text>
              <TextInput
                value={confirmSignupPassword}
                onChangeText={setConfirmSignupPassword}
                secureTextEntry
                placeholder="Confirm Password"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <TouchableOpacity onPress={handleSignup} style={{ backgroundColor: "#40B5AD", padding: 15, borderRadius: 10, marginTop: 20 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Create Account</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => goTo("login")} style={{ marginTop: 15 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Already have an account? Login</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* forgot screen */}
          {screen === "forgot" && (
            <View>
              <Text>Email</Text>
              <TextInput
                value={forgotEmail}
                onChangeText={setForgotEmail}
                placeholder="Enter email"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <TouchableOpacity onPress={handleForgot} style={{ backgroundColor: "#40B5AD", padding: 15, borderRadius: 10, marginTop: 20 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Send Code</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => goTo("login")} style={{ marginTop: 15 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* reset screen */}
          {screen === "reset" && (
            <View>
              <Text>Verification Code</Text>
              <TextInput
                value={resetCode}
                onChangeText={setResetCode}
                placeholder="Enter code"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <Text>New Password</Text>
              <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
                placeholder="New password"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <Text>Confirm Password</Text>
              <TextInput
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                secureTextEntry
                placeholder="Confirm new password"
                style={{ backgroundColor: "#fff", padding: 12, borderRadius: 10, marginVertical: 10 }}
              />

              <TouchableOpacity onPress={handleReset} style={{ backgroundColor: "#40B5AD", padding: 15, borderRadius: 10, marginTop: 20 }}>
                <Text style={{ textAlign: "center", color: "white" }}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

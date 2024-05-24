import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const MyDocument2 = ({
  firstName,
  lastName,
  Eaddress,
  phoneN,
  dateG,
  degree,
  Schooldescription,
  education,
  school,
  aboutMe,
  skills,
  projects,
  color,
}) => {
  // Create styles with dynamic color
  const styles = StyleSheet.create({
    page: {
      flexDirection: "",
      backgroundColor: "#fff",
      padding: 20,
    },
    container: {
      flexDirection: "row",
      flexGrow: 1,
    },
    topColumn: {
      flexDirection: "row",
      backgroundColor: color, // Use the color prop here
      padding: 15,
      width: 560,
    },
    leftColumn: {
      flexDirection: "column",
      backgroundColor: "#ffffff", // Use the color prop here
      padding: 5,
      width: 150,
    },
    rightColumn: {
      flexDirection: "column",
      flexGrow: 1,
      padding: 20,
    },
    header: {
      fontSize: 70,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    subHeader: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 8,
      color: color, // Use the color prop here
    },
    content: {
      fontSize: 14,
      marginBottom: 5,
      maxWidth: 400,
    },
    contentt: {
      fontSize: 14,
      marginBottom: 9,
      maxWidth: 400,
      fontWeight: "bold",
    },
    leftColumnTitle: {
      fontSize: 13,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#ffffff", // Use the color prop here
    },
    leftColumnContent: {
      fontSize: 10,
      marginBottom: 8,
      marginTop: 8,
    },
    listItem: {
      marginBottom: 5,
    },
    listItemContent: {
      marginLeft: 10,
      fontSize: 10,
      marginBottom: 8,
      marginTop: 8, // Adjust as needed
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.topColumn}>
          <Text style={styles.header}>
            {firstName} {lastName}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            {phoneN !== "" || Eaddress !== "" ? (
              <Text style={styles.leftColumnTitle}>Personal Information</Text>
            ) : null}
            {phoneN !== "" && (
              <Text style={styles.leftColumnContent}>Phone:</Text>
            )}
            <Text style={styles.leftColumnContent}>{phoneN}</Text>

            {Eaddress !== "" && (
              <Text style={styles.leftColumnContent}>Email:</Text>
            )}
            <Text style={styles.leftColumnContent}>{Eaddress} </Text>
            {skills && skills.some((skill) => skill !== "") && (
              <Text style={styles.leftColumnTitle}>Skills</Text>
            )}

            <View style={styles.listItem}>
              {skills &&
                skills.map((s, index) => (
                  <Text
                    key={index}
                    style={styles.listItemContent}
                  >{` • ${s.skillName}`}</Text>
                ))}
            </View>
          </View>

          <View style={styles.rightColumn}>
            {aboutMe !== "" && <Text style={styles.subHeader}>AboutMe : </Text>}
            <Text style={styles.content}>{aboutMe}</Text>
            {education &&
              education.some(
                (e) =>
                  e.school !== "" ||
                  e.description !== "" ||
                  e.year !== "" ||
                  e.degree !== ""
              ) && <Text style={styles.subHeader}>Education</Text>}

            {education &&
              education.map((e, index) => (
                <p key={index}>
                  <Text style={styles.content}>{e.school}</Text>
                  <Text style={styles.content}>{e.degree}</Text>
                  <Text style={styles.content}>{e.year}</Text>
                  <Text style={styles.content}>{e.description}</Text>
                </p>
              ))}
            {projects &&
              projects.some((p) => p.name !== "" || p.description !== "") && (
                <Text style={styles.subHeader}>Work Experience</Text>
              )}
            {projects &&
              projects.map((p, index) => (
                <p key={index}>
                  <Text style={styles.contentt}>{p.name}</Text>
                  <Text style={styles.content}> {p.description}</Text>
                </p>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default MyDocument2;

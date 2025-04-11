import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { WebView } from "react-native-webview";
import { buscarVideos } from "./youtube";

export default function App() {
  const [pesquisa, setpesquisa] = useState("");
  const [videos, setVideos] = useState([]);
  const pesquisar = async () => {
    try {
      const resultados = await buscarVideos(pesquisa);
      setVideos(resultados);
    } catch (erro) {
      console.error("Erro ao pesquisar vídeos:", erro);
    }
  };

  return (
    <KeyboardAvoidingView style={estilos.container}>
      <View style={estilos.ViewVimeo}>
            <Text style={estilos.ViewVimeotexto}>Pesquise aqui seu video do YouTube!!!</Text>
            </View>
      <View style={estilos.containerPesquisa}>
        <TextInput
          style={estilos.entrada}
          placeholder="Digite sua pesquisa"
          value={pesquisa}
          onChangeText={setpesquisa}
        />
        <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
          <Text style={estilos.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={estilos.scrollView}>
        {videos.map((video) => (
          <View key={video.id.videoId} style={estilos.containerVideo}>
            <Text style={estilos.tituloVideo}>{video.snippet.title}</Text>
            <WebView
              style={estilos.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{
                html: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>`,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  containerPesquisa: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 2,       // define a espessura da borda (fina)
    borderColor: '#000',  // define a cor da borda (preto)
    borderRadius: 8,
    margin: 20,
  },
  entrada: {
    height: 40,
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 20,
    color: '#000',
  },

  botao: {
    backgroundColor: "#05445E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerVideo: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloVideo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  webview: {
    width: '100%',
    aspectRatio: 16 / 9,
  },

  ViewVimeo: {
    marginLeft: 20,
    marginBottom: 30,
  },

  ViewVimeotexto: {
    textAlign: 'center',
    marginLeft: 60,
    width: 250,
    fontSize: 25,
  }
});

import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';
import logoimg from '../../assets/logo.png';
import {Feather} from '@expo/vector-icons';

/**
 * useRoute pega informações específicas da página de nossa aplicação.
 */
import {useNavigation, useRoute} from '@react-navigation/native';
/**
 * No import abaixo estamos importando tudo e nomeando como MailCompose.
 *
 */
import * as MailComposer from 'expo-mail-composer';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident; //Pegamos todos os parametros que foi passado, e acessamos o incident que foi o que passamos.
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}", com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;


    function navigateToIncidents(){
        // navigation.navigate('Incidents');
        navigation.goBack();
    }

    function sendMail(){
        /**
         * Essa função do sendMail, vamos utilizar um pacote do próprio expo, para escrita de email.
         * 
         * O composeAsync para envio de e-mail recebe alguma propriedades.
         * A primeira é o 'subject', relacionado a qual o assunto que vamos dar ao email.
         * A segunda é o recipients, que é o destinatário.
         * A terceira é o body, que é o conteúdo da mensagem.
         */

         MailComposer.composeAsync({
                subject: `Herói do caso: ${incident.title}`,
                recipients: [incident.email],
                body: message
         });
    }

    function sendWhatsapp(){
        /**
         * Para abrir o WhatsApp utilizaremos uma tecnologia chamada deeplink, que existe nos dispositivos
         * mobile. Basicamente conseguimos acessar nosso aplicativo pelo seu endereço.
         * Os aplicativos mais famosos geralmente tem esse deepLinking
         */

         Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg} />

                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidenteValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidenteValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>
                            WhatsApp
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>
                            Email
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
import { collection, doc, getDocs, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';
import { database } from './firebase';

export async function getProdutos(){
    console.log('request get')
    try {
        const produtosSnapshot = await getDocs(collection(database, 'produtos'))
        const produtosList = produtosSnapshot.docs.map(p => ({
            id:p.id,
            ...p.data()
        }))
        return produtosList
    } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
    }
}

export async function adicionar(newItem){
    console.log('request add')
    try {
        await addDoc(collection(database, 'produtos'), newItem)
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
    }
}

export async function edit(produto){
    console.log('request edit')
    try {
        await updateDoc(doc(database, 'produtos', produto.id), produto);
    } catch (error) {
        console.error("Erro ao editar", error);
    }
    
}

export async function deletar(id){
    console.log('request del')
    try {
        await deleteDoc(doc(database, 'produtos', id));
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}
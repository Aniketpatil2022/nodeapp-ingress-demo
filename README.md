# nodeapp-ingress-demo

A Kubernetes mini-project to demonstrate **Ingress**, **LoadBalancer**, and **path-based routing** using a simple Node.js application.

## 🧩 Project Structure

This demo deploys two versions of the same Node.js app:

- **Blue App** – responds with pod name on `/blue`
- **Green App** – responds with pod name on `/green`

Each app is:

- Packaged in a Deployment with 2 replicas
- Exposed via a ClusterIP service
- Routed through an NGINX Ingress Controller using path-based routing

---

## 📦 Folder Contents

```bash
.
├── blue-deployment.yaml
├── green-deployment.yaml
├── blue-service.yaml
├── green-service.yaml
├── ingress.yaml
├── Dockerfile
└── app.js

1. Build Docker image (on a node with Docker access):
docker build -t nodeapp-ingress-demo:latest .

2. Apply Kubernetes manifests
kubectl apply -f blue-deployment.yaml
kubectl apply -f blue-service.yaml
kubectl apply -f green-deployment.yaml
kubectl apply -f green-service.yaml
kubectl apply -f ingress.yaml

3. Verify Ingress Controller (K3s uses embedded NGINX)
kubectl get svc -n ingress-nginx

4. ccess the App
Assuming 192.168.56.100 is your ingress IP:

http://192.168.56.100/blue → hits one of the blue pods

http://192.168.56.100/green → hits one of the green pods

You've hit the [blue|green] pod: <pod-name>

---Concepts Covered---
Kubernetes Deployments
ClusterIP Services
Ingress Controller (NGINX)
Path-based routing (/blue, /green)
LoadBalancer setup in K3s

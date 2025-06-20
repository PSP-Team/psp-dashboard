from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional
import os
import random

app = FastAPI()

# === Serve React Frontend ===
app.mount("/", StaticFiles(directory="dist", html=True), name="static")

# === SPA Fallback: For React Router navigation ===
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    index_path = os.path.join("dist", "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    raise HTTPException(status_code=404, detail="Frontend not found")

# === API Models ===
class TradeSignal(BaseModel):
    symbol: str
    action: str  # "buy" or "sell"
    amount: float

class TradeExecutionResponse(BaseModel):
    trade_id: str
    symbol: str
    action: str
    amount: float
    status: str
    price_executed: Optional[float] = None

# === API Root ===
@app.get("/api")
async def root():
    return {"message": "PSP Core API is running!"}

# === Trade Signal Endpoint ===
@app.post("/api/trade-signal", response_model=TradeExecutionResponse)
async def receive_signal(signal: TradeSignal):
    if signal.amount <= 0:
        raise HTTPException(status_code=400, detail="Amount must be positive")
    if signal.action.lower() not in ["buy", "sell"]:
        raise HTTPException(status_code=400, detail="Action must be 'buy' or 'sell'")

    simulated_price = round(random.uniform(1000, 50000), 2)
    trade_id = f"trade_{random.randint(10000, 99999)}"

    return TradeExecutionResponse(
        trade_id=trade_id,
        symbol=signal.symbol,
        action=signal.action.lower(),
        amount=signal.amount,
        status="executed",
        price_executed=simulated_price
    )
